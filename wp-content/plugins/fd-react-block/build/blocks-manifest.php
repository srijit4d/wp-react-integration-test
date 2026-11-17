<?php
// This file is generated. Do not modify it manually.
return array(
	'faq-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'fourthdimension/faq-block',
		'version' => '0.1.0',
		'title' => 'FAQ Block',
		'category' => 'widgets',
		'icon' => 'editor-help',
		'description' => 'Display a list of frequently asked questions with answers.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Frequently Asked Questions'
			),
			'accordionMode' => array(
				'type' => 'string',
				'default' => 'multi'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'question' => 'What is Rett syndrome?',
						'answer' => 'Rett syndrome is a rare neurological condition that primarily affects girls.'
					),
					array(
						'question' => 'Where can I find support?',
						'answer' => 'Explore the Rett Resources section for caregiver, medical, and community support.'
					)
				)
			)
		),
		'textdomain' => 'fd-react-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'fd-react-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'fourthdimension/fd-react-block',
		'version' => '0.1.0',
		'title' => 'Copyright Date Block',
		'category' => 'widgets',
		'description' => 'Display rett life site’s copyright date.',
		'example' => array(
			
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'fd-react-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'timeline-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'fourthdimension/timeline-block',
		'version' => '0.1.0',
		'title' => 'Timeline Block',
		'category' => 'widgets',
		'icon' => 'clock',
		'description' => 'Display timeline milestones for a journey, project, or care pathway.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Timeline'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'year' => '2019',
						'heading' => 'Initial diagnosis',
						'description' => 'A key milestone in the journey with support planning started.'
					),
					array(
						'year' => '2022',
						'heading' => 'Community support',
						'description' => 'Family connected with support groups and specialist resources.'
					)
				)
			)
		),
		'textdomain' => 'fd-react-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
