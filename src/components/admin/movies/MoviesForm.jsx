import { useState, useEffect } from 'react'
import actorService from '../../../services/actorService'
import directorService from '../../../services/directorService'
import movieCategoryService from '../../../services/movieCategoryService'

export const MoviesForm = ({ formValues, handleInputChange, handleSubmit }) => {
    const { title, image, youtubeVideoUrl, description, publishDate, actorIds, categoryId, directorIds } = formValues
    const [actors, setActors] = useState([])
    const [directors, setDirectors] = useState([])
    const [categories, setCategories] = useState([])

    Promise.all([
        movieCategoryService.getAll(),
        directorService.getAll(),
        actorService.getAll()
    ]).then(values => {
        const [categories, directors, actors] = values
        setActors(actors)
        setDirectors(directors)
        setCategories(categories)
    })

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
                    type="datetime-local"
                    value={publishDate}
                    name="publishDate"
                    onChange={handleInputChange}
                    placeholder='Publish Date'
                />
            </div>
            <div className="col-md-12">
                <label>Select actor</label>
                <select name="actorIds" onChange={handleInputChange} multiple size={actors.length}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    {
                        actors.map(actor => (
                            <option key={actor.id} value={Number(actor.id)}>{actor.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-md-12">
                <label>Select category</label>
                <select name="categoryId" onChange={handleInputChange} value={categoryId.id}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    {
                        categories.map(category => (
                            <option key={category.id} value={Number(category.id)}>{category.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-md-12">
                <label>Select director</label>
                <select name="directorIds" onChange={handleInputChange} multiple size={directors.length}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    {
                        directors.map(director => (
                            <option key={director.id} value={Number(director.id)}>{director.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="form-button mt-3">
                <button id="submit" type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
    )
}
