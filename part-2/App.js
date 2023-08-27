function App() {
    return <div>
        <Tweet 
        name = 'Adam Levar'
        username = 'awesomeBlossom13'
        date = {new Date().toDateString()}
        message = 'I love to code' />

        <Tweet 
        name = 'Tyler Swan'
        username = 'ObviousOctopus'
        date = {new Date().toDateString()}
        message = 'Has anyone learned Javascript before?'
         />

         <Tweet 
         name = 'David Poh'
         username = 'RaptorTractor'
         date = {new Date().toDateString()}
         message = 'Is anyone else excited for Starfield?'
          />
    </div>
}