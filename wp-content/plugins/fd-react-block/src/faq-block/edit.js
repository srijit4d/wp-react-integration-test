import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title, items } = attributes;

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
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('FAQ Settings', 'fd-react-block')} initialOpen={true}>
					<Button variant="primary" onClick={addItem}>
						{__('Add FAQ item', 'fd-react-block')}
					</Button>
				</PanelBody>
			</InspectorControls>

			<RichText
				tagName="h2"
				className="faq-block__title"
				value={title}
				onChange={(value) => setAttributes({ title: value })}
				placeholder={__('FAQ heading…', 'fd-react-block')}
			/>

			<div className="faq-block__list">
				{items.map((item, index) => (
					<div className="faq-block__item" key={`faq-item-${index}`}>
						<RichText
							tagName="h3"
							className="faq-block__question"
							value={item.question}
							onChange={(value) => updateItem(index, 'question', value)}
							placeholder={__('Question…', 'fd-react-block')}
						/>
						<RichText
							tagName="p"
							className="faq-block__answer"
							value={item.answer}
							onChange={(value) => updateItem(index, 'answer', value)}
							placeholder={__('Answer…', 'fd-react-block')}
						/>
						<Button
							variant="secondary"
							onClick={() => removeItem(index)}
							disabled={items.length === 1}
						>
							{__('Remove item', 'fd-react-block')}
						</Button>
					</div>
				))}
			</div>

			<Button variant="primary" onClick={addItem}>
				{__('Add FAQ item', 'fd-react-block')}
			</Button>
		</div>
	);
}
