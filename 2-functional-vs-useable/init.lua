local tsc_config = require("typescript.tsc_config")
local tsc_process = require("typescript.tsc_process")
local user_config = require("typescript.config")
local notifications = require("typescript.notifications")
local user_commands = require("typescript.user_commands")

local M = {}

M.setup = function(opts)
	user_config.create_user_config(opts)
	user_commands.create_user_commands()
end

M.run = function()
	local config_files = tsc_config.find_config_files()

	if not tsc_process.has_tsc_executable() then
		notifications.send_no_tsc_notification()
		return
	end

	if tsc_process.already_running(config_files) then
		notifications.send_already_runnning_notification()
		return
	end

	if user_config.enable_progress_notifications then
		notifications.start_progress_notification()
	end

	tsc_process.run_tsc_processes(config_files)
end

M.stop = function()
	tsc_process.stop_tsc_processes()
	notifications.send_stop_notification()
end

return M
