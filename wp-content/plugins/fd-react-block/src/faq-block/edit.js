import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { accentTitle, title, items, accordionMode, summaryIcon, summaryIconImageUrl, summaryIconImageAlt } = attributes;

	const iconMap = {
		none: '',
		arrow: '➜',
		plus: '+',
		check: '✓',
		star: '★',
	};

	const selectedIcon = iconMap[summaryIcon] || '';

	const onSelectSummaryIconImage = (media) => {
		setAttributes({
			summaryIconImageUrl: media?.url || '',
			summaryIconImageAlt: media?.alt || '',
		});
	};

	const removeSummaryIconImage = () => {
		setAttributes({
			summaryIconImageUrl: '',
			summaryIconImageAlt: '',
		});
	};

	const updateItem = (index, field, value) => {
		const nextItems = [...items];
		nextItems[index] = {
			...nextItems[index],
			[field]: value,
		};
		setAttributes({ items: nextItems });
	};

	const addItem = () => {
		setAttributes({
			items: [
				...items,
				{
					question: __('New question', 'fd-react-block'),
					answer: __('New answer', 'fd-react-block'),
                    testimonialDes: '',
				    testimonialAuthor: '',
				},
			],
		});
	};

	const removeItem = (index) => {
		setAttributes({
			items: items.filter((_, itemIndex) => itemIndex !== index),
		});
	};

	return (
	<section {...useBlockProps()}>
		<InspectorControls>
			{/* keep your existing PanelBody exactly as is */}
		</InspectorControls>

		<div className="faq-block__container">
			<div className="faq-block__heading">
				<h2 className="faq-block__title">
					<RichText
						tagName="span"
						className="faq-block__accent"
						value={accentTitle}
						onChange={(value) => setAttributes({ accentTitle: value })}
						placeholder={__('Accent text…', 'fd-react-block')}
					/>{' '}
					<RichText
						tagName="span"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__('FAQ heading…', 'fd-react-block')}
					/>
				</h2>
			</div>

			<div className="faq-block__list">
				{items.map((item, index) => (
					// Always open in the editor so every answer/testimonial is editable
					<details className="faq-block__item" open key={`faq-item-${index}`}>
						<summary
							className="faq-block__summary"
							onClick={(e) => e.preventDefault()}
						>
							{summaryIcon === 'custom-image' && summaryIconImageUrl ? (
								<span className="faq-block__leading-icon faq-block__leading-icon--image" aria-hidden="true">
									<img src={summaryIconImageUrl} alt="" />
								</span>
							) : selectedIcon ? (
								<span className="faq-block__leading-icon" aria-hidden="true">
									{selectedIcon}
								</span>
							) : null}
							<RichText
								tagName="span"
								className="faq-block__question"
								value={item.question}
								onChange={(value) => updateItem(index, 'question', value)}
								placeholder={__('Question…', 'fd-react-block')}
							/>
						</summary>

						<div className="faq-block__content">
							<RichText
								tagName="p"
								className="faq-block__answer"
								value={item.answer}
								onChange={(value) => updateItem(index, 'answer', value)}
								placeholder={__('Answer…', 'fd-react-block')}
							/>

							<blockquote className="faq-block__quote">
								<RichText
									tagName="p"
									value={item.testimonialDes}
									onChange={(value) => updateItem(index, 'testimonialDes', value)}
									placeholder={__('Testimonial (optional)…', 'fd-react-block')}
								/>
								<RichText
									tagName="cite"
									value={item.testimonialAuthor}
									onChange={(value) => updateItem(index, 'testimonialAuthor', value)}
									placeholder={__('Testimonial author…', 'fd-react-block')}
								/>
							</blockquote>

							<Button
								className="faq-block__remove"
								variant="secondary"
								onClick={() => removeItem(index)}
								disabled={items.length === 1}
							>
								{__('Remove item', 'fd-react-block')}
							</Button>
						</div>
					</details>
				))}
			</div>

			<Button className="faq-block__add" variant="primary" onClick={addItem}>
				{__('Add FAQ item', 'fd-react-block')}
			</Button>
		</div>
	</section>
);
}
