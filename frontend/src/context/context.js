import { createContext } from "react"

export const TechContext = createContext()
export const JobContext = createContext()

export const TechProvider = TechContext.Provider
export const JobProvider = JobContext.Provider