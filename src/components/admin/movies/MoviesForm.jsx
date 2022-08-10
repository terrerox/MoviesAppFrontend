import React from 'react'

export const MoviesForm = () => {
    return (
        <form>
            <label>Title</label>
            <input
                required
                type="text"
                name="title"
                placeholder="title"
                value={title}
                onChange={handleinputChange}
            />
            <label>Image link</label>
            <input
                required
                type="text"
                name="image"
                placeholder="image"
                value={image}
                onChange={handleinputChange}
            />
            <label>Youtube link</label>
            <input
                required
                type="text"
                name="youtubeVideoUrl"
                placeholder="Youtube link"
                value={youtubeVideoUrl}
                onChange={handleinputChange}
            />
            <label>Description</label>
            <textarea
                value={description}
                name="description"
                onChange={handleinputChange}
                placeholder='Description'
            />
            <label>Excerpt</label>
            <textarea
                value={excerpt}
                name="excerpt"
                onChange={handleinputChange}
                placeholder='Excerpt'
            />
            <label>Publish Date</label>
            <input
                type="date"
                value={publishDate}
                name="publishDate"
                onChange={handleinputChange}
                placeholder='Publish Date'
            />
        </form>
    )
}
