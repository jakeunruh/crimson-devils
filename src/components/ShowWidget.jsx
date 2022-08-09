import "../styles/show-widget.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

function ShowWidget() {

  return (
    <section className="main__show-widget">
		<h2>Upcoming Shows</h2>
		<HelmetProvider>
			<Helmet>
				<script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>
			</Helmet>
		</HelmetProvider>
        
		<a href="/" className="bit-widget-initializer"
		data-artist-name="id_3668221"
		
		data-background-color="rgba(161,23,27,1)"
		data-separator-color="rgba(13,6,4,1)"
		data-text-color="rgba(233,229,228,1)"
		data-font="Helvetica"
		data-auto-style="true"
		data-display-local-dates="false"
		data-local-dates-position="tab"
		data-display-past-dates="false"
		data-display-details="false"
		data-display-lineup="false"
		data-display-start-time="false"
		data-social-share-icon="false"
		data-display-limit="all"
		
		data-date-format=""
		data-date-orientation="horizontal"
		data-date-border-color="#08C3BA"
		data-date-border-width="1px"
		data-date-border-radius="10px"
		
		data-event-ticket-cta-size="medium"
		data-event-ticket-text="TICKETS"
		data-event-ticket-icon="false"
		data-event-ticket-cta-text-color="#FFFFFF"
		data-event-ticket-cta-bg-color="rgba(13,6,4,1)"
		data-event-ticket-cta-border-color="rgba(255,255,255,1)"
		data-event-ticket-cta-border-width="1px"
		data-event-ticket-cta-border-radius="4px"
		
		data-sold-out-button-text-color="#FFFFFF"
		data-sold-out-button-background-color="#9B9B9B"
		data-sold-out-button-border-color="rgba(255,255,255,1)"
		data-sold-out-button-clickable="false"
		
		data-event-rsvp-position="left"
		data-event-rsvp-cta-size="medium"
		data-event-rsvp-text="SET REMINDER"
		data-event-rsvp-icon="true"
		data-event-rsvp-cta-text-color="rgba(13,6,4,1)"
		data-event-rsvp-cta-bg-color="rgba(233,229,228,1)"
		data-event-rsvp-cta-border-color="rgba(13,6,4,1)"
		data-event-rsvp-cta-border-width="1px"
		data-event-rsvp-cta-border-radius=""
		
		data-follow-section-position="bottom"
		data-follow-section-alignment="left"
		data-follow-section-header-text="Want Updates?"
		data-follow-section-cta-size="medium"
		data-follow-section-cta-text="FOLLOW"
		data-follow-section-cta-icon="false"
		data-follow-section-cta-text-color="rgba(255,255,255,1)"
		data-follow-section-cta-bg-color="rgba(13,6,4,1)"
		data-follow-section-cta-border-color="rgba(255,255,255,1)"
		data-follow-section-cta-border-width="1px"
		data-follow-section-cta-border-radius=""
		
		data-play-my-city-position="hidden"
		data-play-my-city-alignment="Center"
		data-play-my-city-header-text="Don’t see a show near you?"
		data-play-my-city-cta-size="medium"
		data-play-my-city-cta-text="REQUEST A SHOW"
		data-play-my-city-cta-icon="true"
		data-play-my-city-cta-text-color="#FFFFFF"
		data-play-my-city-cta-bg-color="#08C3BA"
		data-play-my-city-cta-border-color="#08C3BA"
		data-play-my-city-cta-border-width="0px"
		data-play-my-city-cta-border-radius="4px"
		
		data-language="en"
		data-widget-width=""
		data-div-id=""
		data-app-id=""
		data-affil-code="undefined"
		data-bit-logo-position="bottomRight"
		data-bit-logo-color="rgba(180,39,43,1)"
		
		>
			
		</a>
    </section>
  )
}

export default ShowWidget
