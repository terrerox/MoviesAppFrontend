import React from 'react'

export const MoviesForm = ({ formValues, handleInputChange, handleSubmit }) => {
    const { title, image, youtubeVideoUrl, description, publishDate } = formValues

    return (
        <form onSubmit={handleSubmit}>

            <div className="col-md-12">
                <input
                    required
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={handleInputChange}
                />
            </div>

            <div className="col-md-12">
                <input
                    required
                    type="text"
                    name="image"
                    placeholder="image"
                    value={image}
                    onChange={handleInputChange}
                />
            </div>

            <div className="col-md-12">
                <input
                    required
                    type="text"
                    name="youtubeVideoUrl"
                    placeholder="Youtube link"
                    value={youtubeVideoUrl}
                    onChange={handleInputChange}
                />
            </div>

            <div className="col-md-12">
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                    placeholder='Description'
                />
            </div>
            <div className="col-md-12">
                <label>Publish Date</label>
                <input
                    type="date"
                    value={publishDate}
                    name="publishDate"
                    onChange={handleInputChange}
                    placeholder='Publish Date'
                />
            </div>

            <div className="form-button mt-3">
                <button id="submit" type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
    )
}
