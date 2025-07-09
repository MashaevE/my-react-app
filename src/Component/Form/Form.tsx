import React from "react";

type FormProps = {
    onClose: () => void;
};

export const Form = ({ onClose }: FormProps): React.ReactElement => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose();
    };

    const handleFormClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="modal" onClick={onClose}>
            <form className="form" onClick={handleFormClick} onSubmit={handleSubmit}>
                <h2 className="form-title">Зарегистрироваться</h2>
                <div className="form__content">
                    <label htmlFor="name" className="form__contnent-label">Имя</label>
                    <input
                        type="text"
                        placeholder="Имя"
                        className="form__content-input"
                        id="name"
                        required
                    />
                    <label htmlFor="email" className="form__contnent-label">Почта</label>
                    <input
                        type="email"
                        placeholder="Почта"
                        className="form__content-input"
                        id="email"
                        required
                    />
                </div>
                <div className="form__content-button">
                    <button
                        type="submit"
                        className="form__button form__button-submit"
                    >
                        Зарегистрироваться
                    </button>
                    <button
                        type="button"
                        className="form__button form__button-close"
                        onClick={onClose}
                    >
                        Отмена
                    </button>
                </div>
            </form>
        </div>
    );
};