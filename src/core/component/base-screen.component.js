import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Create a new BaseScreen instance.
	 * @param {Object} options - The opinions for the BaseScreen.
	 * @param {string} options.title - The title for the screen.
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}
	/**
	 * Create a new BaseScreen instance.
	 * @param {HTMLElement}
	 */
	render() {
		throw new Error('Ошибка')
	}
}
