/**
 * Test-only client roster of the assembled viewer page.
 *
 * A served viewer page is the owner's own Web shell with the owner's client plugins; this roster is the
 * subset the viewer page specs need: the wire plugin, the Gateway, remote access, the Session/Workspace controllers,
 * the menu service, presentation plugins, and the Liveshare `./client` face, which mounts the viewer surfaces when the
 * carrier names a share. Every row is the package's own `/client` face registered as a module-table
 * factory. It must be imported only after {@link prepareViewerRemoteFaces} answered the generated
 * `/remote` faces these plugins import.
 *
 * @module @infinity-agent/experimental-liveshare/tests/viewer-page-roster
 */

import * as apiGateway from '@infinity-agent/api-gateway/client'
import * as apiRemoteAccess from '@infinity-agent/api-remote-access/client'
import * as apiRemotes from '@infinity-agent/api-remotes/client'
import * as apiSessionController from '@infinity-agent/api-session-controller/client'
import * as apiWorkspaceController from '@infinity-agent/api-workspace-controller/client'
import * as clientConnection from '@infinity-agent/client-connection/client'
import * as clientFileUpload from '@infinity-agent/client-file-upload/client'
import * as clientLocale from '@infinity-agent/client-locale/client'
import * as clientModules from '@infinity-agent/client-modules/client'
import * as clientResources from '@infinity-agent/client-resources/client'
import * as clientShortcuts from '@infinity-agent/client-shortcuts/client'
import * as uiAttachment from '@infinity-agent/client-ui-attachment/client'
import * as uiChat from '@infinity-agent/client-ui-chat/client'
import * as uiContextMenu from '@infinity-agent/client-ui-context-menu/client'
import * as uiConversation from '@infinity-agent/client-ui-conversation/client'
import * as uiDeliverables from '@infinity-agent/client-ui-deliverables/client'
import * as uiFileDrag from '@infinity-agent/client-ui-file-drag/client'
import * as uiLayout from '@infinity-agent/client-ui-layout/client'
import * as uiRenderer from '@infinity-agent/client-ui-renderer/client'
import * as uiSession from '@infinity-agent/client-ui-session/client'
import * as uiSettings from '@infinity-agent/client-ui-settings/client'
import * as uiSidebar from '@infinity-agent/client-ui-sidebar/client'
import * as uiSidebarRight from '@infinity-agent/client-ui-sidebar-right/client'
import * as uiTheme from '@infinity-agent/client-ui-theme/client'
import * as uiTool from '@infinity-agent/client-ui-tool/client'
import * as uiTrajectory from '@infinity-agent/client-ui-trajectory/client'
import * as uiWorkspace from '@infinity-agent/client-ui-workspace/client'
import * as typertRegistry from '@infinity-agent/typert-registry/client'
import * as liveshare from '../src/client/index.ts'

/** One module-table row: the entry id the Loader creates, and that plugin's client exports. */
export interface ViewerPageRosterRow {
  readonly id: string
  readonly exports: Readonly<Record<string, unknown>>
}

/** Entry id of the module-system bootstrap whose exports the facade hands to the module system. */
export const VIEWER_PAGE_BOOTSTRAP_ID = '@infinity-agent/client-modules'

/** The viewer page roster; Cordis composes these entries by service injection, so order is irrelevant. */
export const VIEWER_PAGE_ROSTER: readonly ViewerPageRosterRow[] = [
  { id: '@infinity-agent/typert-registry', exports: typertRegistry },
  { id: '@infinity-agent/experimental-liveshare', exports: liveshare },
  { id: VIEWER_PAGE_BOOTSTRAP_ID, exports: clientModules },
  { id: '@infinity-agent/client-connection', exports: clientConnection },
  { id: '@infinity-agent/api-gateway', exports: apiGateway },
  { id: '@infinity-agent/api-remote-access', exports: apiRemoteAccess },
  { id: '@infinity-agent/api-remotes', exports: apiRemotes },
  { id: '@infinity-agent/api-session-controller', exports: apiSessionController },
  { id: '@infinity-agent/api-workspace-controller', exports: apiWorkspaceController },
  { id: '@infinity-agent/client-file-upload', exports: clientFileUpload },
  { id: '@infinity-agent/client-locale', exports: clientLocale },
  { id: '@infinity-agent/client-resources', exports: clientResources },
  { id: '@infinity-agent/client-shortcuts', exports: clientShortcuts },
  { id: '@infinity-agent/client-ui-renderer', exports: uiRenderer },
  { id: '@infinity-agent/client-ui-theme', exports: uiTheme },
  { id: '@infinity-agent/client-ui-settings', exports: uiSettings },
  { id: '@infinity-agent/client-ui-layout', exports: uiLayout },
  { id: '@infinity-agent/client-ui-session', exports: uiSession },
  { id: '@infinity-agent/client-ui-sidebar', exports: uiSidebar },
  { id: '@infinity-agent/client-ui-conversation', exports: uiConversation },
  { id: '@infinity-agent/client-ui-chat', exports: uiChat },
  { id: '@infinity-agent/client-ui-context-menu', exports: uiContextMenu },
  { id: '@infinity-agent/client-ui-tool', exports: uiTool },
  { id: '@infinity-agent/client-ui-attachment', exports: uiAttachment },
  { id: '@infinity-agent/client-ui-file-drag', exports: uiFileDrag },
  { id: '@infinity-agent/client-ui-sidebar-right', exports: uiSidebarRight },
  { id: '@infinity-agent/client-ui-trajectory', exports: uiTrajectory },
  { id: '@infinity-agent/client-ui-deliverables', exports: uiDeliverables },
  { id: '@infinity-agent/client-ui-workspace', exports: uiWorkspace },
]
