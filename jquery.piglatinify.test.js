( function ( $ ) {
	QUnit.module( 'jquery.piglatinify', QUnit.newMwEnvironment() );

	QUnit.test( 'Simple text', 3, function ( assert ) {
		var $el1 = $( '<div/>' ).text( 'The quick brown fox jumps over the lazy dog' ),
			$el2 = $( '<div/>' ).text( 'The quick brown fox jumps over the lazy dog.' ),
			$el3 = $( '<div/>' ).text( 'The quick brown fox jumps over 199 lazy dogs.' );
		assert.equal( $el1.piglatinify().html(), 'eThay uickqay ownbray oxfay umpsjay overay ethay azylay ogday', 'Sentence without punctuation' );
		assert.equal( $el2.piglatinify().html(), 'eThay uickqay ownbray oxfay umpsjay overay ethay azylay ogday.', 'Sentence with punctuation' );
		assert.equal( $el3.piglatinify().html(), 'eThay uickqay ownbray oxfay umpsjay overay 199 azylay ogsday.', 'Sentence with punctuation and numbers' );
	} );

	QUnit.test( 'Formatted text', 2, function ( assert ) {
		var $el1 = $( '<div/>' ).html( '<b>The quick brown</b> fox jumps over 199 <i>lazy</i> dogs.' ),
			$el2 = $( '<div/>' ).html( '<b>The quick <u>brown</u></b> fox jumps over 199 <i>lazy</i> dogs.' );
		assert.equal( $el1.piglatinify().html(), '<b>eThay uickqay ownbray</b> oxfay umpsjay overay 199 <i>azylay</i> ogsday.', 'Sentence with one level of formatting' );
		assert.equal( $el2.piglatinify().html(), '<b>eThay uickqay <u>ownbray</u></b> oxfay umpsjay overay 199 <i>azylay</i> ogsday.', 'Sentence with two levels of formatting' );
	} );
}( jQuery ) );
