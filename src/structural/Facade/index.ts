import SubSystem1 from "./SubSystems/SubSystem1"
import SubSystem2 from "./SubSystems/SubSystem2"
import SubSystem3 from "./SubSystems/SubSystem3"

export default class Facade {
  // A simplified facade offering the services of subsystems
  static subSystem1(): string {
      // Uses the subsystems method
      return new SubSystem1().method()
  }

  static subSystem2(value: number): number {
      // Uses the subsystems method
      return new SubSystem2().method(value)
  }

  static subSystem3(value: { C: number[] }): { C: number[] } {
      // Uses the subsystems method
      return new SubSystem3().method(value)
  }
}