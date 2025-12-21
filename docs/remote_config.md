# Firebase Remote Config Setup

This project uses Firebase Remote Config to control feature flags and configuration values remotely.

## Configuration Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `show_instagram` | Boolean | `true` | Controls the visibility of the Instagram link/icon in the header and mobile menu. |

## How to Initialize/Update Remote Config

A template file is provided at `remote_config_template.json` in the root of the project.

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **Run** > **Remote Config**.
3.  Click on the **menu (three dots)** in the top right corner of the Remote Config dashboard.
4.  Select **Import Remote Config**.
5.  Upload the `remote_config_template.json` file from your project root.
6.  Review the changes and click **Publish**.

## Real-time Updates

The application is configured to listen for real-time updates. When you publish a change in the Firebase Console, the application should reflect the new value almost immediately (within a few seconds) without requiring a user to refresh the page.

For development, the fetch interval is set to 10 seconds.
