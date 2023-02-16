export interface ClassModifier {
  [key: string]: boolean
}

export type HtmlInput = Vue & {
  files: any[]
  focus: () => void
}

export type ValidateForm = Vue & {
  validate: () => Promise<boolean>
  errors: string[]
  reset: () => void
}
