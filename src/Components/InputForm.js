import React from 'react'

export default function InputForm(props) {
    return (
        <div>
    <form>
        <fieldset>
            <label>
            <p>Name</p>
            <input name="name" />
            </label>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
        </div>
    )
}
