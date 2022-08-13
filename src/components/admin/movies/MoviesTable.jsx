import React from 'react'
import { useGetAll } from '../../../hooks/useGetAll'

export const MoviesTable = () => {
    const { response, error, errorMensage } = useGetAll()

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    error && <p className="errorMsg">{errorMensage}</p>
                }
                {
                    (!response && !error) && <p className="loading">Loading...</p>
                }
                {
                    (response && !error) && response.data.map(movie => (
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
