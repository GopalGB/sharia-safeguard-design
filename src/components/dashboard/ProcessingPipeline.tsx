
import React from 'react';
import { ArrowRight, FileText, Search, CheckCircle, AlertTriangle, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ProcessingPipeline = () => {
  const { toast } = useToast();
  
  // Mock data for document processing stages
  const stages = [
    { id: 1, name: 'Document Upload', icon: FileText, count: 24, status: 'completed' },
    { id: 2, name: 'OCR Extraction', icon: Search, count: 18, status: 'in-progress' },
    { id: 3, name: 'NLP Analysis', icon: Database, count: 12, status: 'pending' },
    { id: 4, name: 'Compliance Check', icon: CheckCircle, count: 10, status: 'pending' },
    { id: 5, name: 'Review', icon: AlertTriangle, count: 8, status: 'pending' }
  ];

  const handleStageClick = (stage) => {
    toast({
      title: `${stage.name}`,
      description: `${stage.count} documents in this stage (${stage.status})`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Processing Pipeline</CardTitle>
        <CardDescription>Current status of documents in the processing pipeline</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-2">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div 
                className={`flex flex-col items-center p-3 rounded-lg cursor-pointer hover:shadow-md transition-shadow ${
                  stage.status === 'completed' ? 'bg-green-100' : 
                  stage.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                }`}
                onClick={() => handleStageClick(stage)}
              >
                <stage.icon className={`h-6 w-6 mb-2 ${
                  stage.status === 'completed' ? 'text-green-600' : 
                  stage.status === 'in-progress' ? 'text-blue-600' : 'text-gray-600'
                }`} />
                <span className="text-xs font-medium text-center">{stage.name}</span>
                <span className={`text-lg font-bold ${
                  stage.status === 'completed' ? 'text-green-600' : 
                  stage.status === 'in-progress' ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {stage.count}
                </span>
              </div>
              
              {index < stages.length - 1 && (
                <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingPipeline;
