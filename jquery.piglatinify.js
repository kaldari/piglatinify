( function ( $ ) {

	$.fn.piglatinify = function() {
		var punctuation = ['.', '!', '?', ';', ':', '\'', '"', ','];

		convertWord = function( node ) {
			var textArray = node.split(" ");
			$( textArray ).each( function( index ) {
				// Make sure word isn't empty or just punctuation
				if ( textArray[index].length > 0 && $.inArray( textArray[index], punctuation ) === -1 ) {
					var firstLetter = textArray[index].charAt(0);
					textArray[index] = textArray[index].substring(1) + firstLetter + 'ay';
				}
			} );
			return textArray.join(" ");
		};

		return this.each( function( index, element ) {
			var node,
				tw = document.createTreeWalker( element, NodeFilter.SHOW_TEXT );
			while ( tw.nextNode() ) {
				node = tw.currentNode;
				node.nodeValue = convertWord( node.nodeValue );
			}
		} );

	};

}( jQuery ) );
