// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
    var AppView = React.createClass ({ //<= similar to Backbone.extend
    	render: function() { //<= built-in keyword
    		return (
    			<div className="pageContainer">	
	    			<HeaderElement/>
	    			<SearchElement/>
	    			<ArticleElement/>
	    			<FollowPosts/>
	    		</div>	
    			)
    	}
    })

    var HeaderElement = React.createClass ({  //<= self=encapsulating, reusable component which can be used in different projects and handle different user interactions
		render: function() {
			return ( //<= must return only one parent element, though it can have many children
				<div className="header-container">	
	    			<img id="skyline" src="../dist/images/houston-skyline.jpg"/>
	    			<img id="circle-logo"src="../dist/images/ironyardlogo.png"/>
	    		</div>		
			)
		}
	})

	var SearchElement = React.createClass ({
		render: function() {
			return (
				<div className="searchEl-container">
					<p id="search-title">THE IRON YARD | HOUSTON</p>
					<p id="happenings">Happenings and updates from The Iron Yard in Houston, TX</p>
					<p id="input-title">SEARCH</p>
					<input placeholder="Search Keywords"/>
				</div>
			)
		}

	})

	var ArticleElement = React.createClass ({
		render: function() {
			return (
				<div className="articleEl-container">
					<p className="article-title">September 22 Starts a New Class of The Iron Yard Houston Students</p>
					<p className="article-byline">By Brian Dorton, Campus Director at <a herf="https://www.theironyard.com">The Iron Yard</a> Houston</p>
					<img src="../dist/images/classroom.jpg"/>
					<p className="article-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit </p>
				</div>
			)
		} 
		
	})

	var FollowPosts = React.createClass ({
		render: function() {
			return (
				<div className="follow-container">
					<p id="never-miss">Never miss a post!</p>
					<img src="../dist/images/ironyardlogo.png"/>
					<p id="tiyhouston">tiyhouston</p>
					<p id="box-text">The Iron Yard | Houston</p>
					<button>+ Follow</button>
				</div>
			)
		}
	})

    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
