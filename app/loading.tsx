import React from 'react'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                <div className="space-y-2">
                    <div className="h-4 w-24 rounded-md bg-gray-200 animate-pulse" />
                    <div className="h-4 w-32 rounded-md bg-gray-200 animate-pulse" />
                </div>
            </div>
        </div>
    )
}

export default Loading