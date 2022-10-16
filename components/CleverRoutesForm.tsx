import { useRouter } from 'next/router'
import { useState, ChangeEventHandler, FormEventHandler } from 'react'

export default function CleverRoutesForm() {
  const router = useRouter()
  const [path, setPath] = useState<string>('')

  const handlePathChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPath(e.target.value)
  }

  const handleFormSubmit: FormEventHandler = (e) => {
    e.preventDefault()

    router.push('/clever-routes/' + encodeURIComponent(path))
  }

  return (
    <form onSubmit={handleFormSubmit} className="clever-routes-form">
      <p>
        <label htmlFor="path">Path:</label>
        <input
          autoFocus={true}
          type="text"
          id="path"
          value={path}
          placeholder="e.g.- abc"
          onChange={handlePathChange}
        />
      </p>

      <p>
        <input type="submit" value="Visit path" />
      </p>
    </form>
  )
}
