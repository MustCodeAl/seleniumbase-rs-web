/* This file is generated and managed by tsync */

export interface ConvertRequest {
  source: string;
  language?: string;
  test_name: string;
}

export interface ConvertResponse {
  rust: string;
  diagnostics: Array<DiagnosticView>;
  is_complete: boolean;
}

export interface DiagnosticView {
  line: number;
  severity: string;
  message: string;
}

export interface ExtractRequest {
  url?: string;
  html?: string;
}

export interface ExtractResponse {
  markdown: string;
  tables: Array<TableView>;
}

export interface TableView {
  headers: Array<string>;
  rows: Array<Array<string>>;
}

export interface ActionRunRequest {
  url: string;
  engine?: string;
  persona?: string;
  headless?: boolean;
}

export interface ActionRunResponse {
  success: boolean;
  url: string;
  status: number;
  message: string;
}

export interface CrawlerRequest {
  url: string;
  max_depth?: number;
}

export interface CrawlerResponse {
  pages_count: number;
  urls: Array<string>;
}

export interface MultiLoginAccountRequest {
  username: string;
  role: string;
  os: string;
}

export interface MultiLoginRunRequest {
  url: string;
  accounts: Array<MultiLoginAccountRequest>;
}

export interface MultiLoginSessionResult {
  username: string;
  role: string;
  os: string;
  context_id: string;
  authenticated: boolean;
  status_code: number;
  cookies: Array<CookieView>;
  elapsed_ms: number;
}

export interface CookieView {
  name: string;
  value: string;
  domain: string;
  path: string;
}

export interface MultiLoginRunResponse {
  total_accounts: number;
  successful_logins: number;
  sessions: Array<MultiLoginSessionResult>;
}
