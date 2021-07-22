// generated by cdk8s
import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';

/**
 *
 *
 * @schema Grafana
 */
export class Grafana extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Grafana"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'integreatly.org/v1alpha1',
    kind: 'Grafana',
  }

  /**
   * Renders a Kubernetes manifest for "Grafana".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: GrafanaProps): any {
    return {
      ...Grafana.GVK,
      ...props,
    };
  }

  /**
   * Defines a "Grafana" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: GrafanaProps) {
    super(scope, id, Grafana.manifest(props));
  }
}

/**
 * @schema Grafana
 */
export interface GrafanaProps {
  /**
   * @schema GrafanaDataSource#metadata
   */
  readonly metadata?: any;

  /**
   * @schema Grafana#spec
   */
  readonly spec: GrafanaSpec;

}

/**
 * @schema GrafanaSpec
 */
export interface GrafanaSpec {
  /**
   * @schema GrafanaSpec#containers
   */
  readonly containers?: any[];

  /**
   * @schema GrafanaSpec#secrets
   */
  readonly secrets?: string[];

  /**
   * @schema GrafanaSpec#baseImage
   */
  readonly baseImage?: string;

  /**
   * @schema GrafanaSpec#configMaps
   */
  readonly configMaps?: string[];

  /**
   * Log level of the grafana instance, defaults to info
   *
   * @schema GrafanaSpec#logLevel
   */
  readonly logLevel?: string;

  /**
   * Default admin user name
   *
   * @schema GrafanaSpec#adminUser
   */
  readonly adminUser?: string;

  /**
   * Default admin password
   *
   * @schema GrafanaSpec#adminPassword
   */
  readonly adminPassword?: string;

  /**
   * Basic auth enabled
   *
   * @schema GrafanaSpec#basicAuth
   */
  readonly basicAuth?: boolean;

  /**
   * Disable login form
   *
   * @schema GrafanaSpec#disableLoginForm
   */
  readonly disableLoginForm?: boolean;

  /**
   * Disable signout menu
   *
   * @schema GrafanaSpec#disableSignoutMenu
   */
  readonly disableSignoutMenu?: boolean;

  /**
   * Anonymous auth enabled
   *
   * @schema GrafanaSpec#anonymous
   */
  readonly anonymous?: boolean;

  /**
   * Grafana config
   *
   * @schema GrafanaSpec#config
   */
  readonly config?: any;

  /**
   * @schema GrafanaSpec#ingress
   */
  readonly ingress?: GrafanaSpecIngress;

  /**
   * @schema GrafanaSpec#service
   */
  readonly service?: GrafanaSpecService;

  /**
   * @schema GrafanaSpec#deployment
   */
  readonly deployment?: GrafanaSpecDeployment;

  /**
   * @schema GrafanaSpec#serviceAccount
   */
  readonly serviceAccount?: GrafanaSpecServiceAccount;

  /**
   * Grafana client settings
   *
   * @schema GrafanaSpec#client
   */
  readonly client?: any;

  /**
   * Backwards compatibility switches
   *
   * @schema GrafanaSpec#compat
   */
  readonly compat?: any;

  /**
   * @schema GrafanaSpec#dashboardLabelSelector
   */
  readonly dashboardLabelSelector?: any[];

  /**
   * Jsonnet library configuration
   *
   * @schema GrafanaSpec#jsonnet
   */
  readonly jsonnet?: any;

  /**
   * @schema GrafanaSpec#livenessProbeSpec
   */
  readonly livenessProbeSpec?: GrafanaSpecLivenessProbeSpec;

  /**
   * @schema GrafanaSpec#readinessProbeSpec
   */
  readonly readinessProbeSpec?: GrafanaSpecReadinessProbeSpec;

}

/**
 * @schema GrafanaSpecIngress
 */
export interface GrafanaSpecIngress {
  /**
   * Create an ingress / route
   *
   * @schema GrafanaSpecIngress#enabled
   */
  readonly enabled?: boolean;

  /**
   * Ingress class name
   *
   * @schema GrafanaSpecIngress#ingressClassName
   */
  readonly ingressClassName?: string;

  /**
   * Ingress path
   *
   * @schema GrafanaSpecIngress#path
   */
  readonly path?: string;

  /**
   * pathType specifies how ingress paths should be matched
   *
   * @schema GrafanaSpecIngress#pathType
   */
  readonly pathType?: string;

  /**
   * The hostname of the ingress / route
   *
   * @schema GrafanaSpecIngress#hostname
   */
  readonly hostname?: string;

  /**
   * Additional annotations for the ingress / route
   *
   * @schema GrafanaSpecIngress#annotations
   */
  readonly annotations?: any;

  /**
   * Additional labels for the ingress / route
   *
   * @schema GrafanaSpecIngress#labels
   */
  readonly labels?: any;

  /**
   * Override port to target in the grafana service
   *
   * @schema GrafanaSpecIngress#targetPort
   */
  readonly targetPort?: string;

}

/**
 * @schema GrafanaSpecService
 */
export interface GrafanaSpecService {
  /**
   * Override default service name
   *
   * @schema GrafanaSpecService#name
   */
  readonly name?: string;

  /**
   * Override default ports
   *
   * @schema GrafanaSpecService#ports
   */
  readonly ports?: any[];

  /**
   * Additional annotations for the service
   *
   * @schema GrafanaSpecService#annotations
   */
  readonly annotations?: any;

  /**
   * Additional labels for the service
   *
   * @schema GrafanaSpecService#labels
   */
  readonly labels?: any;

  /**
   * Service type (NodePort, ClusterIP or LoadBalancer)
   *
   * @schema GrafanaSpecService#type
   */
  readonly type?: string;

}

/**
 * @schema GrafanaSpecDeployment
 */
export interface GrafanaSpecDeployment {
  /**
   * Additional annotations for the service
   *
   * @schema GrafanaSpecDeployment#annotations
   */
  readonly annotations?: any;

  /**
   * Additional labels for the service
   *
   * @schema GrafanaSpecDeployment#labels
   */
  readonly labels?: any;

  /**
   * Additional labels for the running grafana pods in a labeled node.
   *
   * @schema GrafanaSpecDeployment#nodeSelector
   */
  readonly nodeSelector?: any;

  /**
   * Additonal labels for running grafana pods in tained nodes.
   *
   * @schema GrafanaSpecDeployment#tolerations
   */
  readonly tolerations?: any[];

  /**
   * Additonal labels for running grafana pods with affinity properties.
   *
   * @schema GrafanaSpecDeployment#affinity
   */
  readonly affinity?: any;

  /**
   * Environment variables from Secret or ConfigMap.
   *
   * @schema GrafanaSpecDeployment#envFrom
   */
  readonly envFrom?: any[];

  /**
   * Disable creating a random admin user
   *
   * @schema GrafanaSpecDeployment#skipCreateAdminAccount
   */
  readonly skipCreateAdminAccount?: boolean;

  /**
   * Pod priority class name
   *
   * @schema GrafanaSpecDeployment#priorityClassName
   */
  readonly priorityClassName?: string;

  /**
   * Extra volumes mounts to be mounted to the grafana deployment
   *
   * @schema GrafanaSpecDeployment#extraVolumeMounts
   */
  readonly extraVolumeMounts?: any[];

  /**
   * Extra volumes to be attached to the grafana deployment
   *
   * @schema GrafanaSpecDeployment#extraVolumes
   */
  readonly extraVolumes?: any[];

}

/**
 * @schema GrafanaSpecServiceAccount
 */
export interface GrafanaSpecServiceAccount {
  /**
   * Disable ServiceAccount creation for grafana
   *
   * @schema GrafanaSpecServiceAccount#skip
   */
  readonly skip?: boolean;

  /**
   * Additional annotations for the serviceaccount
   *
   * @schema GrafanaSpecServiceAccount#annotations
   */
  readonly annotations?: any;

  /**
   * Additional labels for the serviceaccount
   *
   * @schema GrafanaSpecServiceAccount#labels
   */
  readonly labels?: any;

}

/**
 * @schema GrafanaSpecLivenessProbeSpec
 */
export interface GrafanaSpecLivenessProbeSpec {
  /**
   * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   *
   * @schema GrafanaSpecLivenessProbeSpec#initialDelaySeconds
   */
  readonly initialDelaySeconds?: number;

  /**
   * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.
   *
   * @default 1 second. Minimum value is 1.
   * @schema GrafanaSpecLivenessProbeSpec#timeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
   *
   * @default 10 seconds. Minimum value is 1.
   * @schema GrafanaSpecLivenessProbeSpec#periodSeconds
   */
  readonly periodSeconds?: number;

  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
   *
   * @default 1. Must be 1 for liveness and startup. Minimum value is 1.
   * @schema GrafanaSpecLivenessProbeSpec#successThreshold
   */
  readonly successThreshold?: number;

  /**
   * When a probe fails, Kubernetes will try failureThreshold times before giving up. Giving up in case of liveness probe means restarting the container. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.
   *
   * @default 3. Minimum value is 1.
   * @schema GrafanaSpecLivenessProbeSpec#failureThreshold
   */
  readonly failureThreshold?: number;

}

/**
 * @schema GrafanaSpecReadinessProbeSpec
 */
export interface GrafanaSpecReadinessProbeSpec {
  /**
   * Number of seconds after the container has started before liveness probes are initiated. More info https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   *
   * @schema GrafanaSpecReadinessProbeSpec#initialDelaySeconds
   */
  readonly initialDelaySeconds?: number;

  /**
   * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.
   *
   * @default 1 second. Minimum value is 1.
   * @schema GrafanaSpecReadinessProbeSpec#timeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
   *
   * @default 10 seconds. Minimum value is 1.
   * @schema GrafanaSpecReadinessProbeSpec#periodSeconds
   */
  readonly periodSeconds?: number;

  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
   *
   * @default 1. Must be 1 for liveness and startup. Minimum value is 1.
   * @schema GrafanaSpecReadinessProbeSpec#successThreshold
   */
  readonly successThreshold?: number;

  /**
   * When a probe fails, Kubernetes will try failureThreshold times before giving up. Giving up in case of liveness probe means restarting the container. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.
   *
   * @default 3. Minimum value is 1.
   * @schema GrafanaSpecReadinessProbeSpec#failureThreshold
   */
  readonly failureThreshold?: number;

}

