
export function highlightDomChanges(targetNode: HTMLElement, config = { childList: true, subtree: true, attributes: true, characterData: true }) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Element that was affected by the mutation
      let changedElement = mutation.target.cloneNode(true);
      // add dataset
      // (mutation.target as HTMLElement).dataset.highlight = 'true';

      // Style properties for highlight effects
      const highlightStyles = {
        added: "2px solid #F44336", // green border for added elements
        removed: "2px solid #F44336", // red border for removed elements
        attributeChanged: "2px solid #FFEB3B", // yellow border for attribute changes
        textChanged: "2px dashed #FF9800" // blue dashed border for text changes
      };

      // Detect and highlight the specific type of mutation
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            (node as HTMLElement).style.border = highlightStyles.added;
          }
        });
        
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            (node as HTMLElement).style.border = highlightStyles.removed;
          }
        });
      } else if (mutation.type === "attributes") {
        if (changedElement === document.body) return;
        (changedElement as HTMLElement).style.border = highlightStyles.attributeChanged;
      } else if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
        (changedElement.parentElement as HTMLElement).style.border = highlightStyles.textChanged;
      }
    });
  });

  // Start observing the target node with the specified configurations
  observer.observe(targetNode, config);

  // To disconnect the observer, use: observer.disconnect();
  return observer;
}
