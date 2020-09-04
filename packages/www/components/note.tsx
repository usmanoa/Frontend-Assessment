import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/core';

interface NoteProps {
  id: string,
  title: string
 }

const Note: FunctionComponent<NoteProps> = ({id, title}) => {
  return (
    <Link href={`/notes/${id}`} as={`/notes/${id}`}>
      <a>
        <div className="card">
          <p className="title">{title}</p>
        </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          padding: 0.5rem;
          height: 3rem;
          border-bottom: 1px solid #CCCCCC;
        }

        .card:hover{
          background-color: #F7FAFC;
        }

        .title {
          white-space: nowrap;
          word-break: keep-all;
          overflow: hidden;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        @media (min-width: 600px) {
          .card {
            height: 4rem
          }
        }
      `}</style>
      </a>
    </Link>
  )
}

export default Note;