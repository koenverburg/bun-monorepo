import {container} from "tsyringe"
import { Config } from "./services/config";
import { Foo } from "./services/foo";

// Registery
container.register<Config>(Config.name, {useValue: new Config() });
container.register<Foo>(Foo.name, {useClass: Foo});

// Instances
export const FooService = container.resolve(Foo)
export const Configuration = container.resolve(Config)
