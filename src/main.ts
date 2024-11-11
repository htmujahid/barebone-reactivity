import { AddCounter } from './components/add-counter'
import { CounterSignalComponent } from './components/counter-signal'
import { CounterStateComponent } from './components/counter-state'
import { Counters } from './components/counters'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Todo } from './components/todo'
import { highlightDomChanges } from './mutation-plugin'
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

highlightDomChanges(app)