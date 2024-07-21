"use client"

interface ErrorPageProps{
    error: Error,
    reset: () => void
}

const ErrorPage= ({error}: ErrorPageProps) => {
    return (
        <div>
            <h1>{error.message} </h1>
        </div>
    )
}