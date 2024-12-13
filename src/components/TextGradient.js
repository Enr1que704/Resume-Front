const TextGradient = (props) => {
    return (
      <h1 className="animate-textGradient bg-gradient-to-r from-protoss-pylon via-bauhaus-blue to-protoss-pylon bg-clip-text text-6xl font-semibold text-transparent">
        {props.text}
      </h1>
    )
  }
  
  export default TextGradient