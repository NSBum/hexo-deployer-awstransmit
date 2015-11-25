-- This is used to sync our hexo blog to S3 using Transmit

on run {argv1, argv2}
	set dwelltime to argv2 as number
	set favName to argv1 as string
	with timeout of dwelltime seconds
		tell application "Transmit"
			--	don't show AppleScript alerts
			set SupressAppleScriptAlerts to true

			-- get a favorite by its name
			set s3BlogFav to first item of (favorites whose name is favName)

			tell current tab of first document
				-- connect to the favorite (which assumes the fav specifies the local and remote paths)
				connect to s3BlogFav

				delay 2.0

				--	perform the sync
				synchronize local browser to remote browser

				-- close the connection
				close remote browser

				-- wait for a second and quit the app
				delay 1.0
				quit
			end tell
		end tell
	end timeout
end run
