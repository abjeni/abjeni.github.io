import { useState } from 'react'
import chessShader from './assets/chess_shader.png'
import octreeShader from './assets/octree_shader.png'
import truchetShader from './assets/truchet_shader.png'
import asteroidsShader from './assets/asteroids_shader.png'
import voxelsGithub from './assets/voxels_github.jpg'
import githubLogo from '/github.svg'
import './App.css'

function Shadertoy() {
  return <>
    <div>
      <a href="https://www.shadertoy.com/user/abje" id="shadertoy">Shadertoy</a>
      <br></br>
      <a href="https://www.shadertoy.com/view/4d3BDM">
        <img src={chessShader} className="shader"></img>
      </a>
      <a href="https://www.shadertoy.com/view/4sVfWw">
        <img src={octreeShader} className="shader"></img>
      </a>
      <br></br>
      <a href="https://www.shadertoy.com/view/MtcBDM">
        <img src={truchetShader} className="shader"></img>
      </a>
      <a href="https://www.shadertoy.com/view/wdjSzz">
        <img src={asteroidsShader} className="shader"></img>
      </a>
    </div>
  </>
}



function GithubProjects() {
  return <>
    <div>
      <a href="https://github.com/abjeni">
        <img src={githubLogo} id="github" className="logo" alt="Github logo" />
      </a>
      <br></br>
      <a href="https://abjeni.github.io/test-voxel/">
        <img src={voxelsGithub} className="githubIcon"></img>
      </a>
      <a href="https://abjeni.github.io/test-voxel/">
        repository link
      </a>
    </div>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return <>
    <GithubProjects/>
    <Shadertoy/>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  </>
}

export default App
