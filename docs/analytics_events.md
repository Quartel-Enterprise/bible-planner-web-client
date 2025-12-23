# Analytics Events Documentation

This document describes the custom analytics events implemented in the Bible Planner landing page.

## Event Reference

| Event Name | Description | Trigger | Parameters |
|:--- |:--- |:--- |:--- |
| **`page_view`** | Triggered when a user views a page. | On route change or initial load. | `page_path` (string): Current URL path.<br>`page_title` (string): Document title. |
| **`select_content`** | Triggered when a user clicks a content CTA (Legal). | Click on specific links/buttons. | `content_type` (string): 'legal'.<br>`item_id` (string): 'privacy_policy', 'terms_of_service'.<br>`origin` (string): 'header_menu', 'hero', 'cta_section', 'mobile_menu', 'footer'. |
| **`download_click`** | Triggered when a user clicks a download button. | Click on App Store or Google Play buttons. | `platform` (string): 'ios' or 'android'.<br>`origin` (string): 'header_menu', 'hero', 'cta_section'. |
| **`download_confirmation_view`** | Triggered when the platform mismatch confirmation modal is shown. | User clicks download button for wrong platform. | `current_platform` (string): Detected OS (e.g., 'iOS/macOS').<br>`clicked_store` (string): Name of store clicked.<br>`recommended_store` (string): Name of recommend store. |
| **`download_confirmation_confirm`** | Triggered when user proceeds to the *recommended* store from the modal. | Click 'Go to [Recommended]'. | `recommended_store` (string): Name of store opened. |
| **`download_confirmation_continue`** | Triggered when user proceeds to the *clicked* (wrong) store from the modal. | Click 'Continue to [Clicked]'. | `clicked_store` (string): Name of store opened. |
| **`download_confirmation_dismiss`** | Triggered when user closes the modal without action. | Click 'X' or outside. | `method` (string): 'close_button' etc. |
| **`video_start`** | Triggered when a user plays a video for the first time. | Thumbnail click. | `video_id` (string): YouTube video ID. |
| **`video_play`** | Triggered when video playback resumes. | Play button click (after initial start). | `video_id` (string): YouTube video ID. |
| **`video_pause`** | Triggered when user pauses the video. | Pause button click. | `video_id` (string): YouTube video ID.<br>`video_time` (number): Current time in seconds.<br>`video_progress` (number): Completion percentage (0.0 - 1.0). |
| **`video_complete`** | Triggered when video plays to the end. | Video ends. | `video_id` (string): YouTube video ID. |
| **`video_replay`** | Triggered when user replays the video. | Replay button click. | `video_id` (string): YouTube video ID. |
| **`menu_click`** | Triggered when a user opens a menu. | Menu toggle button click. | `menu_id` (string): 'mobile_menu', 'download_menu', 'language_menu'. |
| **`menu_dismiss`** | Triggered when a user closes a menu. | Back button, toggle button, outside click, or navigation. | `menu_id` (string): 'mobile_menu', 'download_menu', 'language_menu'.<br>`method` (string): 'back_button', 'toggle_button', 'close_icon', 'click_outside', 'navigation'. |
| **`logo_click`** | Triggered when user clicks the logo or app title. | Click on logo/title. | `target` (string): 'icon' or 'text'. |
| **`social_click`** | Triggered when user clicks a social media link. | Click on Instagram icon/link. | `platform` (string): 'instagram'.<br>`origin` (string): 'header_desktop', 'mobile_menu'. |
| **`language_change`** | Triggered when user switches language. | Language button click. | `language` (string): Language code (e.g., 'en', 'pt', 'es'). |
| **`theme_change`** | Triggered when user switches theme. | Theme toggle click. | `theme` (string): 'light' or 'dark'. |
| **`traffic_source`** | Triggered when a user visits with UTM parameters. | App load or route change with `utm_source` present. | `source` (string): UTM source.<br>`medium` (string, optional): UTM medium.<br>`campaign` (string, optional): UTM campaign.<br>`term` (string, optional): UTM term.<br>`content` (string, optional): UTM content. |

## Implementation Details

- **Page Views**: Implemented via a `useEffect` hook in `App.tsx` that listens for location changes using `react-router-dom`'s `useLocation`.
- **Traffic Source**: Implemented directly in `App.tsx`. Parses URL query parameters for standard UTM tags (`utm_source`, `utm_medium`, etc.) and logs a `traffic_source` event if found. Query parameters are preserved during language redirects.
- **Menu Tracking**: Uses a `dismissMethodRef` to accurately capture the closure method (`back_button`, `click_outside`, etc.), interacting with the browser's History API (`pushState`/`popstate`).
- **Video Tracking**: Uses the YouTube IFrame Player API to track precise playback states and progress.
- **Download Confirmation**: Logic is centralized in `useDownloadConfirmation` hook, which intercepts `onClick` events for download buttons.
