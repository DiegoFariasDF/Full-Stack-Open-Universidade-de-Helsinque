const Header = (props) => {
  return(
    <div>
      <p>
        Curso {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>
        couteudo: {props.Content}
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

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14
  
 
  return (
    <div>
      <Header course={course} />
      <Content Content={part1} exercises={exercises1} />
      <Content Content={part2} exercises={exercises2} />
      <Content Content={part3} exercises={exercises3} />
      <Total Numero={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App