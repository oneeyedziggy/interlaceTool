
(function(){
	window.ns = window.ns || {};
	ns.deInterlace = function( input, numOutputs ){
		var lines, linesLen, output = [], currMod, moder = numOutputs;
		lines = input.replace( /\r/g, "" ).split( "\n" );
		linesLen = lines.length;
		for ( x = 0; x < linesLen; x++ ){
			currMod = x % moder;
			if ( !output[ currMod ] ){
				output[ currMod ] = "";
			} 
			output[ currMod ] += lines[ x ] + "\n";
		}
		for ( currMod = 0; currMod < numOutputs; currMod++ ){
			//trim trailing newline
			if( output[ currMod ] ){
			 //if(  ){
				 
			 //}
			 output[ currMod ] = output[ currMod ].replace( /\n$/, "" );
			}
		}
		return output;
	}
	//var deintresult = deInterlace( "a\nx\nb\ny\nc\nz", 3 );
	//console.log( deintresult[ 0 ] + "\n-\n" + deintresult[ 1 ] + "\n-\n" + deintresult[ 3 ] ); //TODO: test w/ trailing newline(s)
	//console.log( "-----------------------------------------" );

	//lines = [ "a\nb\nc\n", "x\ny\nz\n" ]
	ns.interlace = function( strings ){
		var output = "", x, y, stringsLen = strings.length, metaLines = [], metaLinesLen, currLines;
		for ( x = 0; x < stringsLen; x++ ){
			//currLines = [ "a", "b", "c"];
			currLines = strings[ x ].replace( /\r/g, "" ).split( "\n" );
			metaLines.push( currLines );
		} 

		//metaLines = [ [ "a", "b", "c"], [ "x", "y", "z" ] ];
		metaLinesLen = metaLines.length;

		var maxLinesLen = 0, line;
		//fugure out the max num of lines among jagged 2d array
		for ( x = 0; x < metaLinesLen; x++ ){
			if( metaLines[ x ].length > maxLinesLen ){
				maxLinesLen = metaLines[ x ].length;
			}
		}
		//for up-to the most lines... append the line
		for ( x = 0; x < maxLinesLen; x++ ){
			for ( y = 0; y < stringsLen; y++ ){
				line = ( metaLines[ y ][ x ] ) ? ( metaLines[ y ][ x ] + "\n" ) : "";
				output += line;
			}
		}
		//trim trailing newline
		output = output.replace( /\n$/, "" );
		return output;
	}
	//console.log( Interlace( [ "a\nb\nc\n", "x\ny\nz\n" ] ) );
	//console.log( "-----------------------------------------" );

	//console.log( Interlace( deInterlace( "a\nx\nb\ny\nc\nz", 2 ) ) );
})();
