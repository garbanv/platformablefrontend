import React from 'react'
import EmbedContainer from 'react-oembed-container'

export default function PostContentComponent({data}) {
    return (
      <EmbedContainer markup={data}>
      <div
        dangerouslySetInnerHTML={{ __html: unescape(data) }}
      />
    </EmbedContainer>
    )
}
