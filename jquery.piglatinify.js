( function ( $ ) {

	$.fn.piglatinify = function() {

		convertWord = function( node ) {
			var textArray = node.split(" ");
			$( textArray ).each( function( index ) {
				var firstLetter = textArray[index].charAt(0);
				textArray[index] = textArray[index].substring(1) + firstLetter + 'ay';
			} );
			return textArray.join(" ");
		};
	
		return this.each( function( i, el ) {
			var node,
				tw = document.createTreeWalker( el, NodeFilter.SHOW_TEXT );
			while ( tw.nextNode() ) {
				node = tw.currentNode;
				node.nodeValue = convertWord( node.nodeValue );
			}
		} );

	};

}( jQuery ) );
