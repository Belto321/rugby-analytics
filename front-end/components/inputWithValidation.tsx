import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { ExclamationIcon } from './exclamationIcon'

type Props = {
  children: ReactNode
  error: FieldError | undefined
}

export function InputWithValidation({ children, error }: Props) {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        {children}
        {error ? <ExclamationIcon /> : null}
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error.message}
        </p>
      ) : null}
    </div>
  )
}