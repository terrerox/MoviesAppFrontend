import React from 'react'
import { MoviesForm } from './MoviesForm'
import { useForm } from '../../../hooks/useForm'
import movieService from '../../../services/movieService'
import './MoviesForm.css'

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
  // useEffect(() => {
  //   setValues({
  //       title: book.title || "",
  //       description: book.description || "",
  //       pageCount: book.pageCount || 0,
  //       excerpt: book.excerpt || "",
  //       publishDate: book.publishDate || ""
  //   })
  // }, [book])

  const { title, image, youtubeVideoUrl, description, publishDate } = formValues

  const handleSubmit = async e => {
    e.preventDefault()
    if (title === "" || image === "" || youtubeVideoUrl === "" || description === "" || publishDate === "") {
      return alert("llena eso miop")
    }

    // if (book.id) {
    //     return updateBook(formValues)
    // } 

    movieService.add(formValues)

  }
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Add movie</h3>
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
