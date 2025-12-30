import React from 'react'
import { LiveCursorProps } from '@/types/type'
import Cursor from './Cursor';

const LiveCursors = ({ others }: LiveCursorProps) => {
  others.map((connetionId, presence) => {
    if(!presence) return null;

    return (
        <Cursor key={connectionId}  />
  )
})
};

export default LiveCursors