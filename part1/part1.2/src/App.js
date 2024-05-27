const course = 'Desenvolvimento de aplicação Half Stack'
const part1 = 'Fundamentos da biblioteca React'
const exercises1 = 10
const part2 = 'Usando props para passar dados'
const exercises2 = 7
const part3 = 'Estado de um componente'
const exercises3 = 14

const Header = (props) => {
  return(
    <div>
      <p>
        Curso {props.course}
      </p>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <p>
      <Part Content={part1} exercises={exercises1} />
      <Part Content={part2} exercises={exercises2} />
      <Part Content={part3} exercises={exercises3} />
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Total {props.Numero}
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        couteudo: {props.Content} exercicios: {props.exercises}
      </p>
    </div>
  )
}

const App = () => {

  
  
 
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total Numero={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App