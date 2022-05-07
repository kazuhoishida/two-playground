import { useRef, useEffect } from "react"
import * as Matter from "matter-js"
import useWindowSize from "../../hooks/useWindowSize"
import { body_A, body_N, body_I, body_C } from "./bodies"

export default function VivaDefyGravity() {
  const canvasRef = useRef(null)
  const WINDOW_SIZE = useWindowSize()

  useEffect(() => {
    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse

    // create an engine
    const engine = Engine.create(),
      world = engine.world

    // create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: WINDOW_SIZE.width,
        height: WINDOW_SIZE.height,
        wireframes: false,
        showAngleIndicator: false,
        background: "transparent",
      },
    })

    // reverse gravity
    engine.gravity.y = -0.3

    // run the renderer
    Render.run(render)

    // create runner
    const runner = Runner.create()
    Runner.run(runner, engine)

    // add boundaries
    // in these order: top, top-left, top-right, left, right, bottom
    Composite.add(world, [
      Bodies.rectangle(WINDOW_SIZE.width / 2, -50, WINDOW_SIZE.width, 100, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(0, 0, WINDOW_SIZE.width / 2, 180, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(WINDOW_SIZE.width + 100, 0, WINDOW_SIZE.width, 180, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(-50, WINDOW_SIZE.height / 2, 100, WINDOW_SIZE.height, { isStatic: true }),
      Bodies.rectangle(WINDOW_SIZE.width + 50, WINDOW_SIZE.height / 2, 100, WINDOW_SIZE.height, { isStatic: true }),
      Bodies.rectangle(WINDOW_SIZE.width / 2, WINDOW_SIZE.height + 50, WINDOW_SIZE.width, 100, { isStatic: true }),
    ])

    //add floating bodies
    Composite.add(world, [body_A, body_N, body_I, body_C])

    // add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      })
    Composite.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: WINDOW_SIZE.width, y: WINDOW_SIZE.height },
    })
  }, [])
  return <div ref={canvasRef} />
}
