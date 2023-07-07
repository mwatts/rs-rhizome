import init, { setPanicHook, Rhizome, InputTuple } from '../lib/browser/rhizome_wasm.js'
import { runRhizomeTest } from "./rhizome/rhizome.test.js"

before(async () => {
  await init()

  setPanicHook();
})

runRhizomeTest({
  runner: { describe, it },
  rhizome: {
    Rhizome,
    InputTuple
  }
})