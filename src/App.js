import logo from './logo.svg'
import ListItem from './components/ListItem/ListItem'
import './App.css'

function App() {
  const items = [
    {
      id: 1,
      title: 'Title 1',
      data: { some: 'data 1' },
    },
    {
      id: 2,
      title: 'Title 2',
      data: { some: 'data 2' },
    },
    {
      id: 3,
      title: 'Title 3',
      data: { some: 'data 3' },
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {items.map(
          (item) =>
            console.log(item.data) || (
              <ListItem key={item.id} title={item.title} data={item.data} />
            )
        )}
      </header>
    </div>
  )
}

export default App
