import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
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
					year: __('New year', 'fd-react-block'),
					heading: __('New milestone', 'fd-react-block'),
					description: __('Describe this milestone.', 'fd-react-block'),
					imageUrl: '',
					imageAlt: '',
				},
			],
		});
	};

	const removeItem = (index) => {
		setAttributes({
			items: items.filter((_, itemIndex) => itemIndex !== index),
		});
	};

	const selectImage = (index, media) => {
		const nextItems = [...items];
		nextItems[index] = {
			...nextItems[index],
			imageUrl: media?.url || '',
			imageAlt: media?.alt || '',
		};
		setAttributes({ items: nextItems });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Timeline Settings', 'fd-react-block')} initialOpen={true}>
					<Button variant="primary" onClick={addItem}>
						{__('Add timeline item', 'fd-react-block')}
					</Button>
				</PanelBody>
			</InspectorControls>

			<RichText
				tagName="h2"
				className="timeline-block__title"
				value={title}
				onChange={(value) => setAttributes({ title: value })}
				placeholder={__('Timeline heading…', 'fd-react-block')}
			/>

			<div className="timeline-block__list">
				{items.map((item, index) => (
					<article className="timeline-block__item" key={`timeline-item-${index}`}>
						<div className="timeline-block__media">
							{item.imageUrl ? (
								<img
									className="timeline-block__image"
									src={item.imageUrl}
									alt={item.imageAlt || ''}
								/>
							) : (
								<div className="timeline-block__image-placeholder">
									{__('No image selected', 'fd-react-block')}
								</div>
							)}

							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => selectImage(index, media)}
									allowedTypes={['image', 'image/svg+xml']}
									value={item.imageUrl}
									render={({ open }) => (
										<Button variant="secondary" onClick={open}>
											{item.imageUrl
												? __('Replace image', 'fd-react-block')
												: __('Upload image', 'fd-react-block')}
										</Button>
									)}
								/>
							</MediaUploadCheck>

							{item.imageUrl && (
								<Button
									variant="tertiary"
									onClick={() => {
										updateItem(index, 'imageUrl', '');
										updateItem(index, 'imageAlt', '');
									}}
								>
									{__('Remove image', 'fd-react-block')}
								</Button>
							)}

							<TextControl
								label={__('Image alt text', 'fd-react-block')}
								value={item.imageAlt || ''}
								onChange={(value) => updateItem(index, 'imageAlt', value)}
							/>
						</div>

						<div className="timeline-block__content">
							<RichText
								tagName="p"
								className="timeline-block__year"
								value={item.year}
								onChange={(value) => updateItem(index, 'year', value)}
								placeholder={__('Year / date…', 'fd-react-block')}
							/>
							<RichText
								tagName="h3"
								className="timeline-block__heading"
								value={item.heading}
								onChange={(value) => updateItem(index, 'heading', value)}
								placeholder={__('Milestone title…', 'fd-react-block')}
							/>
							<RichText
								tagName="p"
								className="timeline-block__description"
								value={item.description}
								onChange={(value) => updateItem(index, 'description', value)}
								placeholder={__('Milestone description…', 'fd-react-block')}
							/>
							<Button
								variant="secondary"
								onClick={() => removeItem(index)}
								disabled={items.length === 1}
							>
								{__('Remove item', 'fd-react-block')}
							</Button>
						</div>
					</article>
				))}
			</div>

			<Button variant="primary" onClick={addItem}>
				{__('Add timeline item', 'fd-react-block')}
			</Button>
		</div>
	);
}
