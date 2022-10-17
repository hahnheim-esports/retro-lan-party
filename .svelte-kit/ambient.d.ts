
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const add_path: string;
	export const add_to_path: string;
	export const aliases: string;
	export const ALLUSERSPROFILE: string;
	export const AMDRMSDKPATH: string;
	export const ANSICON: string;
	export const ANSICON_DEF: string;
	export const APPDATA: string;
	export const architecture_bits: string;
	export const ccall: string;
	export const cexec: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const clink_architecture: string;
	export const CMDER_ALIASES: string;
	export const CMDER_CLINK: string;
	export const CMDER_CONFIGURED: string;
	export const CMDER_INIT_END: string;
	export const CMDER_INIT_START: string;
	export const CMDER_ROOT: string;
	export const CMDER_SHELL: string;
	export const CMDER_USER_FLAGS: string;
	export const COLORTERM: string;
	export const COLUMNS: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const ConEmuANSI: string;
	export const ConEmuBackHWND: string;
	export const ConEmuBaseDir: string;
	export const ConEmuBaseDirShort: string;
	export const ConEmuBuild: string;
	export const ConEmuCfgDir: string;
	export const ConEmuDir: string;
	export const ConEmuDrawHWND: string;
	export const ConEmuDrive: string;
	export const ConEmuHooks: string;
	export const ConEmuHWND: string;
	export const ConEmuIsAdmin: string;
	export const ConEmuPalette: string;
	export const ConEmuPID: string;
	export const ConEmuServerPID: string;
	export const ConEmuTask: string;
	export const ConEmuWorkDir: string;
	export const ConEmuWorkDrive: string;
	export const currenArgu: string;
	export const debug_output: string;
	export const depth: string;
	export const DriverData: string;
	export const fast_init: string;
	export const feFlagName: string;
	export const feNot: string;
	export const find_query: string;
	export const FONTCONFIG_FILE: string;
	export const found: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GIT_ASKPASS: string;
	export const git_executable: string;
	export const GIT_INSTALL_ROOT: string;
	export const git_locale: string;
	export const GIT_VERSION_USER: string;
	export const GIT_VERSION_VENDORED: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const LANG: string;
	export const lib_base: string;
	export const lib_console: string;
	export const lib_git: string;
	export const lib_path: string;
	export const lib_profile: string;
	export const LINES: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const max_depth: string;
	export const nix_tools: string;
	export const NODE: string;
	export const npm_config_argv: string;
	export const npm_config_bin_links: string;
	export const npm_config_engine_strict: string;
	export const npm_config_ignore_optional: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_init_license: string;
	export const npm_config_init_version: string;
	export const npm_config_registry: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_user_agent: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_version_git_message: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_config__sap_registry: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies_daisyui: string;
	export const npm_package_dependencies_graphql: string;
	export const npm_package_dependencies_showdown: string;
	export const npm_package_dependencies_svelte_apollo: string;
	export const npm_package_dependencies_svelte_i18n: string;
	export const npm_package_dependencies__apollo_client: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const npm_package_devDependencies_postcss_nested: string;
	export const npm_package_devDependencies_postcss_nesting: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_devDependencies_svelte_time: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__beyonk_gdpr_cookie_consent_banner: string;
	export const npm_package_devDependencies__sveltejs_adapter_netlify: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies__types_showdown: string;
	export const npm_package_name: string;
	export const npm_package_private: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const OculusBase: string;
	export const OLD_PATH: string;
	export const OneDrive: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const path_position: string;
	export const PLINK_PROTOCOL: string;
	export const position: string;
	export const print_debug: string;
	export const print_error: string;
	export const print_verbose: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SVN_SSH: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const time_init: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const user_aliases: string;
	export const USER_BUILD: string;
	export const USER_MAJOR: string;
	export const USER_MINOR: string;
	export const USER_PATCH: string;
	export const VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const VENDORED_BUILD: string;
	export const VENDORED_MAJOR: string;
	export const VENDORED_MINOR: string;
	export const VENDORED_PATCH: string;
	export const verbose_output: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const windir: string;
	export const YARN_WRAP_OUTPUT: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		add_path: string;
		add_to_path: string;
		aliases: string;
		ALLUSERSPROFILE: string;
		AMDRMSDKPATH: string;
		ANSICON: string;
		ANSICON_DEF: string;
		APPDATA: string;
		architecture_bits: string;
		ccall: string;
		cexec: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		clink_architecture: string;
		CMDER_ALIASES: string;
		CMDER_CLINK: string;
		CMDER_CONFIGURED: string;
		CMDER_INIT_END: string;
		CMDER_INIT_START: string;
		CMDER_ROOT: string;
		CMDER_SHELL: string;
		CMDER_USER_FLAGS: string;
		COLORTERM: string;
		COLUMNS: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		ConEmuANSI: string;
		ConEmuBackHWND: string;
		ConEmuBaseDir: string;
		ConEmuBaseDirShort: string;
		ConEmuBuild: string;
		ConEmuCfgDir: string;
		ConEmuDir: string;
		ConEmuDrawHWND: string;
		ConEmuDrive: string;
		ConEmuHooks: string;
		ConEmuHWND: string;
		ConEmuIsAdmin: string;
		ConEmuPalette: string;
		ConEmuPID: string;
		ConEmuServerPID: string;
		ConEmuTask: string;
		ConEmuWorkDir: string;
		ConEmuWorkDrive: string;
		currenArgu: string;
		debug_output: string;
		depth: string;
		DriverData: string;
		fast_init: string;
		feFlagName: string;
		feNot: string;
		find_query: string;
		FONTCONFIG_FILE: string;
		found: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GIT_ASKPASS: string;
		git_executable: string;
		GIT_INSTALL_ROOT: string;
		git_locale: string;
		GIT_VERSION_USER: string;
		GIT_VERSION_VENDORED: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		LANG: string;
		lib_base: string;
		lib_console: string;
		lib_git: string;
		lib_path: string;
		lib_profile: string;
		LINES: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		max_depth: string;
		nix_tools: string;
		NODE: string;
		npm_config_argv: string;
		npm_config_bin_links: string;
		npm_config_engine_strict: string;
		npm_config_ignore_optional: string;
		npm_config_ignore_scripts: string;
		npm_config_init_license: string;
		npm_config_init_version: string;
		npm_config_registry: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_user_agent: string;
		npm_config_version_commit_hooks: string;
		npm_config_version_git_message: string;
		npm_config_version_git_sign: string;
		npm_config_version_git_tag: string;
		npm_config_version_tag_prefix: string;
		npm_config__sap_registry: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_dependencies_daisyui: string;
		npm_package_dependencies_graphql: string;
		npm_package_dependencies_showdown: string;
		npm_package_dependencies_svelte_apollo: string;
		npm_package_dependencies_svelte_i18n: string;
		npm_package_dependencies__apollo_client: string;
		npm_package_description: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_postcss_load_config: string;
		npm_package_devDependencies_postcss_nested: string;
		npm_package_devDependencies_postcss_nesting: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_devDependencies_svelte_time: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__beyonk_gdpr_cookie_consent_banner: string;
		npm_package_devDependencies__sveltejs_adapter_netlify: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		npm_package_devDependencies__types_showdown: string;
		npm_package_name: string;
		npm_package_private: string;
		npm_package_readmeFilename: string;
		npm_package_scripts_build: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_format: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_preview: string;
		npm_package_type: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		OculusBase: string;
		OLD_PATH: string;
		OneDrive: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		path_position: string;
		PLINK_PROTOCOL: string;
		position: string;
		print_debug: string;
		print_error: string;
		print_verbose: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SVN_SSH: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		time_init: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		user_aliases: string;
		USER_BUILD: string;
		USER_MAJOR: string;
		USER_MINOR: string;
		USER_PATCH: string;
		VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: string;
		VBOX_MSI_INSTALL_PATH: string;
		VENDORED_BUILD: string;
		VENDORED_MAJOR: string;
		VENDORED_MINOR: string;
		VENDORED_PATCH: string;
		verbose_output: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		windir: string;
		YARN_WRAP_OUTPUT: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
