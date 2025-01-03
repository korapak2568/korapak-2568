import {IInfo} from "@/data/model/IInfo";
import {Languages} from "@/data/info/Language/Languages";
import {CHORN_SERVICE_INFO} from "@/data/service-info/CHORN_SERVICE_INFO";
import {FEATURE_SERVICE_INFO} from "@/data/info/FEATURE_SERVICE_INFO";
import {ABOUT_CONTENT_INFO} from "@/data/info/ABOUT_CONTENT_INFO";
import {CLOUD_EXPERIENCE_INFO} from "@/data/info/CLOUD_EXPERIENCE_INFO";
import {FULL_STACK_EXPERIENCE_INFO} from "@/data/info/FULL_STACK_EXPERIENCE_INFO";
import {FRONT_END_EXPERIENCE_INFO} from "@/data/info/FRONT_END_EXPERIENCE_INFO";
import {RECOMMENDATIONS_INFO} from "@/data/info/RECOMMENDATIONS_INFO";
import {FOOTER_INFO} from "@/data/info/FOOTER_INFO";
import {BUSINESS_DOMAINS_INFO} from "@/data/info/BUSINESS_DOMAINS_INFO";
import {PRIVACY_POLICY_INFO} from "@/data/info/PRIVACY_POLICY_INFO";
import {TERM_OF_SERVICE} from "@/data/info/TERM_OF_SERVICE";
import {DEVOPS_TESTING_INFO} from "@/data/info/DEVOPS_TESTING_INFO";
import {WORKPLACE_POLICY} from "@/data/info/WORKPLACE_POLICY";
import {CONTACTS} from "@/data/info/CONTACTS";
import {CONSENT_INFO} from "@/data/info/CONSENT_INFO";

export const Info: IInfo = {
    Languages,
    Service: CHORN_SERVICE_INFO,
    Feature: FEATURE_SERVICE_INFO,
    About: ABOUT_CONTENT_INFO,
    Cloud: CLOUD_EXPERIENCE_INFO,
    FullStack: FULL_STACK_EXPERIENCE_INFO,
    FrontEnd: FRONT_END_EXPERIENCE_INFO,
    Recommend: RECOMMENDATIONS_INFO,
    Footer: FOOTER_INFO,
    Business: BUSINESS_DOMAINS_INFO,
    PrivacyPolicy: PRIVACY_POLICY_INFO,
    TermOfService: TERM_OF_SERVICE,
    DevOps: DEVOPS_TESTING_INFO,
    WorkplacePolicy: WORKPLACE_POLICY,
    Contacts: CONTACTS,
    Consent: CONSENT_INFO,
}