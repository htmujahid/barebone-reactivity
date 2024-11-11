import { AddCounter } from './components/add-counter'
import { CounterSignalComponent } from './components/counter-signal'
import { CounterStateComponent } from './components/counter-state'
import { Counters } from './components/counters'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Todo } from './components/todo'
import './style.css'

const app = document.body;

app.appendChild(Header())

const main = document.createElement('main')
  
  main.appendChild(Counters())

  main.appendChild(new CounterStateComponent().get())
  main.appendChild(new CounterSignalComponent().get())

  main.appendChild(new Todo().get())

app.appendChild(main)
app.appendChild(Footer())

AddCounter.script()
function highlightDomChanges(targetNode: HTMLElement, config = { childList: true, subtree: true, attributes: true, characterData: true }) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Element that was affected by the mutation
      let changedElement = mutation.target;

      // Style properties for highlight effects
      const highlightStyles = {
        added: "2px solid #4CAF50", // green border for added elements
        removed: "2px solid #F44336", // red border for removed elements
        attributeChanged: "2px solid #FFEB3B", // yellow border for attribute changes
        textChanged: "2px dashed #2196F3" // blue dashed border for text changes
      };

      const HIGHLIGHT_DURATION = 3000; // 3 seconds

      // Detect and highlight the specific type of mutation
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            (node as HTMLElement).style.border = highlightStyles.added;
            setTimeout(() => { (node as HTMLElement).style.border = ""; }, HIGHLIGHT_DURATION);
          }
        });
        
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            (node as HTMLElement).style.border = highlightStyles.removed;
            setTimeout(() => { (node as HTMLElement).style.border = ""; }, HIGHLIGHT_DURATION);
          }
        });
      } else if (mutation.type === "attributes") {
        (changedElement as HTMLElement).style.border = highlightStyles.attributeChanged;
        setTimeout(() => { (changedElement as HTMLElement).style.border = ""; }, HIGHLIGHT_DURATION);
      } else if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
        (changedElement.parentElement as HTMLElement).style.border = highlightStyles.textChanged;
        setTimeout(() => { (changedElement.parentElement as HTMLElement).style.border = ""; }, HIGHLIGHT_DURATION);
      }
    });
  });

  // Start observing the target node with the specified configurations
  observer.observe(targetNode, config);

  // To disconnect the observer, use: observer.disconnect();
  return observer;
}

// Usage example
// Start observing changes on the entire document body
highlightDomChanges(document.body);

