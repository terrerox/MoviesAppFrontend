import { useEffect } from 'react'
import { MoviesForm } from './MoviesForm'
import { useForm } from '../../../hooks/useForm'
import movieService from '../../../services/movieService'
import './MoviesForm.css'
import { useLocation, useNavigate } from 'react-router-dom'

export const MoviesFormScreen = () => {
  const [formValues, handleInputChange, setValues] = useForm({
    title: "",
    image: "",
    youtubeVideoUrl: "",
    description: "",
    publishDate: "",
    actorIds: [],
    categoryId: 0,
    directorIds: []
  })
  const location = useLocation()
  const navigate = useNavigate()
  const { movie } = location.state

  useEffect(() => {
    setValues({
      title: movie.title || "",
      image: movie.image || "",
      youtubeVideoUrl: movie.youtubeVideoUrl || "",
      description: movie.description || "",
      publishDate: movie.publishDate || "",
      actorIds: movie.actorIds || [],
      categoryId: movie.categoryId || 0,
      directorIds: movie.directorIds || []
    })
  }, [movie])

  const { title, image, youtubeVideoUrl, description, publishDate } = formValues

  const handleSubmit = async e => {
    e.preventDefault()
    if (title === "" || image === "" || youtubeVideoUrl === "" || description === "" || publishDate === "") {
      return alert("llena eso miop")
    }

    if (movie) {
      const payload = {id: movie.id, ...formValues}
      movieService.update(payload)
      return navigate('admin')
    }

    movieService.add(formValues)
    navigate('admin')
  }
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>{movie ? 'Update Movie' : 'Add Movie'}</h3>
              <p>Fill in the data below.</p>
              <MoviesForm
                formValues={formValues}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
