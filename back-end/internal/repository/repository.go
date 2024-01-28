package repository

import (
	"backend/internal/models"
	"database/sql"
)

type DatabaseRepo interface {
	Connection() *sql.DB

	AllMovies() ([]*models.Movie, error)
	OneMovie(id int) (*models.Movie, error)

	GetUserByEmail(email string) (*models.User, error)
	GetUserByID(id int) (*models.User, error)
}
