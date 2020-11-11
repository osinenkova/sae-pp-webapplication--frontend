// LIBRARIES
import React from 'react'
// COMPONENTS
import MessageForm from '../MessageForm'

export default function Help() {
    return (
        <div>
            <MessageForm
                title={'Having trouble navigating this website? Send us your feedback:'}
                textfield={'Enter your name here'}
                textareaPlaceholder={'Your message'}
            />
        </div>
    )
}
