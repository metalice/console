import { VirtualMachineModel } from '../models/index';
import { kubevirtReferenceForModel } from '../models/kubevirtReferenceForModel';

export enum VMWizardURLParams {
  NAMESPACE = 'namespace',
  MODE = 'mode',
  INITIAL_DATA = 'initialData',
  VIEW = 'view',
}

const baseURLBuilder = (namespace: string | undefined) =>
  `/k8s/ns/${namespace || 'default'}/${kubevirtReferenceForModel(VirtualMachineModel)}/~new`;

export const VIRTUALMACHINES_BASE_URL = kubevirtReferenceForModel(VirtualMachineModel);
export const VIRTUALIZATION_BASE_URL = 'virtualization';
export const VIRTUALMACHINES_TEMPLATES_BASE_URL = 'virtualmachinetemplates';

export const wizardBaseURLBuilder = (namespace: string | undefined) =>
  `${baseURLBuilder(namespace)}/wizard`;

export const customizeWizardBaseURLBuilder = (
  namespace: string | undefined,
  params?: string | undefined,
) => `${baseURLBuilder(namespace)}/customize${params || ''}`;

export const YAMLBaseURLBuilder = (namespace: string | undefined) => baseURLBuilder(namespace);
