// Core
import { useState, useEffect } from 'react';

/**
 * Наш кастомный хук
 */
export const useDebounce = (value, delay = 200) => {
    /**
     * Стейт и сеттер для нашего debounced-значения
     */
    const [ debouncedValue, setDebouncedValue ] = useState(value);

    useEffect(
        () => {
            /**
             * Обновлять debounced-значение спустя определённое время
             */
            const timer = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            /**
             * По правилам работы с хуками — обязательно делаем очистку таймера в useEffect.
             */
            return () => {
                /**
                 * При каждом выполнении useEffect может возвращать функцию-очистку.
                 */
                clearTimeout(timer);
            };
        },
        /**
         * Выполнять тело этого эффекта только если value изменилось
         */
        [ value ],
    );

    return debouncedValue;
};
